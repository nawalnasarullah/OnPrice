from pydantic import BaseModel, EmailStr, HttpUrl
from typing import Optional
from datetime import datetime

class UserModel(BaseModel):
    googleId: str
    email: EmailStr
    name: Optional[str] = None
    avatar: Optional[HttpUrl] = None
    createdAt: Optional[datetime] = None
