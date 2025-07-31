from fastapi import APIRouter
from controllers.auth_controller import AuthController

router = APIRouter()

router.post("/google-login")(AuthController.google_login)