# @party
# guests

json.extract! @party, :name, :location
json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts, :title
end
# json.gifts @party.guests.gifts, :title
# json.guests @party.guests

# if @party.include?(@party.guests)
#   json.guests @party.guests
# end
# json.guests @party.guests
