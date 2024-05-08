import requests
import os
from dotenv import load_dotenv

load_dotenv()

class OpenWeather():

    api_key=os.getenv('API_KEY')
    def __init__(self,  city):
        
        if(city=="Andaman Island"):
            self.city="Andaman"
        else:
             self.city=city


    def fetch_weather_data(self):
        url = f"http://api.openweathermap.org/data/2.5/weather?q={self.city}&appid={self.api_key}"
        response = requests.get(url)
        if response.status_code == 200:
            
            data = response.json()
       
            return data
        else:
            print("Failed to fetch weather data.")
            return None

