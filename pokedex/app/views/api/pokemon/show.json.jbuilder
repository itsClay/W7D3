json.set! 'pokemon' do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokemon.image_url)
end

# json.pokemon @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

# json.set! 'items' do
#   json.array! @pokemon.items do |item|
#     json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
#   end
# end

json.items @pokemon.items do |item|
  json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
end
