# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import auth_routes
from db.mongodb import test_connection

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    print("Server is running on http://localhost:5000")
    await test_connection()

# Equivalent to app.use(cors());
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Equivalent to app.use(express.json()); — built-in in FastAPI
# Equivalent to app.use('', authRoutes);
app.include_router(auth_routes.router)

# No need to manually start server — use `uvicorn` to do that
