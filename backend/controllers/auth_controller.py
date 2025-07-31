from fastapi import Request, HTTPException
from db.mongodb import user_collection
from models.user_model import UserModel
from datetime import datetime, timedelta
from jose import jwt
from google.oauth2 import id_token
from google.auth.transport import requests as grequests
import os


GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
JWT_SECRET = os.getenv("JWT_SECRET")


class AuthController:
   async def google_login(request: Request):
    try:
        print("Google login request received")

        body = await request.json()
        token = body.get("token")
        if not token:
            raise HTTPException(status_code=400, detail="Missing token")

        # Verify Google token
        idinfo = id_token.verify_oauth2_token(token, grequests.Request(), GOOGLE_CLIENT_ID)

        sub = idinfo["sub"]
        email = idinfo["email"]
        name = idinfo.get("name")
        picture = idinfo.get("picture")

        # Check if user exists
        user = await user_collection.find_one({"email": email})
        if not user:
            user_data = {
                "googleId": sub,
                "email": email,
                "name": name,
                "avatar": picture,
                "createdAt": datetime.utcnow()
            }
            result = await user_collection.insert_one(user_data)
            user = await user_collection.find_one({"_id": result.inserted_id})

        # Create JWT
        auth_token = jwt.encode(
            {"id": str(user["_id"]), "email": user["email"], "exp": datetime.utcnow() + timedelta(days=7)},
            JWT_SECRET,
            algorithm="HS256"
        )

        # Send response
        user_model = UserModel(**user)
        return {"token": auth_token, "user": user_model.dict()}

    except Exception as e:
        print("Google sign-in error:", e)
        raise HTTPException(status_code=401, detail="Invalid Google token")