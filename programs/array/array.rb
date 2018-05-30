@foods = ["Sandwich", "Banana", "Cheese"]

def list_and_count_foods
  for food in @foods
    p food
  end
  p "That was #{@foods.count} foods!"
end

list_and_count_foods
