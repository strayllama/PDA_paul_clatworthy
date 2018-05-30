@stops = [ "Edinburg", "Stirling", "Aberdeen", "Inverness" ]

def find_if_station_exists (station_to_match)

  for station in @stops
    if station == station_to_match
      p "Your station is in the list!"
      p station
    end
  end

end

find_if_station_exists("Inverness")
