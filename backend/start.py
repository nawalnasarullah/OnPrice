import uvicorn
import os
from dotenv import load_dotenv

load_dotenv()

port = int(os.getenv("PORT", 5000))

if __name__ == "__main__":
    uvicorn.run("main:app", port=port, reload=True)
