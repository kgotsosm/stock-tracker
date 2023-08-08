from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yahooFin

app = FastAPI()

# Configure CORS settings
origins = [
    "http://localhost:5173",  # Add any other frontend URLs as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

top_forty = {
    'PRX': 'PROSUS',
    'BHG': 'BHP',
    'ANH': 'AB INBEV',
    'NPN': 'NASPERS-N',
    'CFR': 'RICHEMONT',
    'BTI': 'BATS',
    'GLN': 'GLENCORE',
    'AGL': 'ANGLO',
    'FSR': 'FIRSTRAND',
    'SBK': 'STANBANK',
    'MTN': 'MTN GROUP',
    'VOD': 'VODACOM',
    'AMS': 'AMPLATS',
    'GFI': 'GFIELDS',
    'S32': 'SOUTH32',
    'CPI': 'CAPITEC',
    'ABG': 'ABSA',
    'SOL': 'SASOL',
    'KIO': 'KUMBA',
    'ANG': 'ANGGOLD',
    'MNP': 'MONDIPLC',
    'SHP': 'SHOPRITE',
    'SLM': 'SANLAM',
    'BID': 'BIDCORP',
    'NED': 'NEDBANK',
    'IMP': 'IMPLATS',
    'DSY': 'DISCOVERY',
    'BVT': 'BIDVEST',
    'SSW': 'SIBANYE-S',
    'APN': 'ASPEN',
    'RNI': 'REINET',
    'REM': 'REMGRO',
    'INP': 'INVPLC',
    'WHL': 'WOOLIES',
    'CLS': 'CLICKS',
    'NRP': 'NEPIROCK',
    'OMU': 'OMUTUAL',
    'PPH': 'PEPKORH',
    'OUT': 'OUTSURE',
    'NPH': 'NORTHAM',
}


@app.get("/fetch_yahoo_data")
def fetch_yahoo_data():
    data = {}
    for key in top_forty:
        data[key] = yahooFin.Ticker(key + '.JO').history(period='1d', interval='1d').to_dict()
    return data
