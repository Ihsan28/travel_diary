from fastapi import FastAPI, Query, HTTPException
from datetime import datetime
from typing import Optional

app = FastAPI(
    title="Location and Search APIs",
    description="A set of APIs for Google Search, Nearby Places, Traffic, and Weather conditions.",
    version="1.0.0"
)

# Root endpoint for basic health check
@app.get("/", summary="Root Endpoint", description="A simple health check endpoint.")
async def read_root():
    """
    Responds with a welcome message to indicate the API is running.
    """
    return {"message": "Welcome to the Location and Search API!"}

@app.get(
    "/search",
    summary="Google Search",
    description="Performs a simulated Google search based on a query.",
    response_description="A dictionary containing the search query."
)
async def google_search(
    query: str = Query(..., min_length=1, max_length=100, description="The search query string.")
):
    """
    **Google Search Endpoint**

    This endpoint simulates a Google search.

    - **query**: The string to search for.
    """
    # In a real application, you would integrate with a Google Search API here.
    # For this example, we just return the query.
    print(f"Received Google Search query: {query}")
    return {"api_type": "Google Search", "query": query, "message": "Simulated Google search."}

@app.get(
    "/nearby_places",
    summary="Nearby Places Search",
    description="Finds nearby places based on location and place type.",
    response_description="A dictionary containing location and place type."
)
async def nearby_places_search(
    location: str = Query(..., min_length=3, description="The geographical location (e.g., 'New York City', '34.0522,-118.2437')."),
    place_type: str = Query(..., min_length=2, description="The type of place to search for (e.g., 'restaurant', 'park', 'cafe').")
):
    """
    **Nearby Places Search Endpoint**

    This endpoint simulates finding nearby places.

    - **location**: The location to search around. Can be a city name or coordinates.
    - **place_type**: The category of places to find.
    """
    # In a real application, you would integrate with a Places API (e.g., Google Places API).
    print(f"Received Nearby Places search for location: {location}, type: {place_type}")
    return {"api_type": "Nearby Places Search", "location": location, "place_type": place_type, "message": "Simulated nearby places search."}

@app.get(
    "/traffic",
    summary="Traffic Condition",
    description="Retrieves simulated traffic conditions between two locations at a specific timestamp.",
    response_description="A dictionary containing start, destination, and timestamp."
)
async def traffic_condition(
    start_location: str = Query(..., min_length=3, description="The starting geographical location."),
    destination_location: str = Query(..., min_length=3, description="The destination geographical location."),
    timestamp: Optional[datetime] = Query(None, description="The timestamp for which to get traffic data (e.g., '2025-07-23T15:30:00'). If not provided, current time is used.")
):
    """
    **Traffic Condition Endpoint**

    This endpoint simulates retrieving traffic conditions.

    - **start_location**: The origin of the journey.
    - **destination_location**: The destination of the journey.
    - **timestamp**: Optional. The specific time for which to check traffic. Defaults to the current time if not provided.
    """
    if timestamp is None:
        timestamp = datetime.now()
    # In a real application, you would integrate with a Traffic API (e.g., Google Maps Traffic API).
    print(f"Received Traffic condition request from {start_location} to {destination_location} at {timestamp}")
    return {
        "api_type": "Traffic Condition",
        "start_location": start_location,
        "destination_location": destination_location,
        "timestamp": timestamp.isoformat(),
        "message": "Simulated traffic condition."
    }

@app.get(
    "/weather",
    summary="Weather Condition",
    description="Retrieves simulated weather conditions for a given location and time.",
    response_description="A dictionary containing location and time."
)
async def weather_condition(
    location: str = Query(..., min_length=3, description="The geographical location (e.g., 'London', 'Paris')."),
    time: Optional[datetime] = Query(None, description="The specific time for which to get weather data (e.g., '2025-07-23T10:00:00'). If not provided, current time is used.")
):
    """
    **Weather Condition Endpoint**

    This endpoint simulates retrieving weather conditions.

    - **location**: The location for which to get weather.
    - **time**: Optional. The specific time for which to check weather. Defaults to the current time if not provided.
    """
    if time is None:
        time = datetime.now()
    # In a real application, you would integrate with a Weather API.
    print(f"Received Weather condition request for location: {location} at {time}")
    return {
        "api_type": "Weather Condition",
        "location": location,
        "time": time.isoformat(),
        "message": "Simulated weather condition."
    }