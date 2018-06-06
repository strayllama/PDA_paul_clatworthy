# Initialise hash:
@pocket_money = {
  "Frequency" => "Weekly",
  "Amount" => 3,
  "Currency" => "Pounds",
  "Balance" => 100 }

# Add new Key,Value pair:
def add_key_value_pair_to_pocket_money (a_key, a_value)
  @pocket_money[a_key] = a_value
end

save_key = "Saving for"
save_value = "Bike"
add_key_value_pair_to_pocket_money save_key, save_value


# Show that its been added:
def list_pocket_money_hash
  p "My Pocket Money"  # Just for display
  @pocket_money.each {|key, value| puts "#{key} is: #{value}" }
end
list_pocket_money_hash
