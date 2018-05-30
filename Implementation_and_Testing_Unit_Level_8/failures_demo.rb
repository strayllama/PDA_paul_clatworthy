# Step by step screen shots

def func1 val
  if val == 1   #  = should be ==
  return true
  else
  return false
  end
end

def max (a, b)  #  dif should be def  AND  'max a b' should read 'max (a, b)'
  if a > b
    return a
  else
    return b # should be return b
  end

end #  This is an extra end, needs removing.

def looper
  for i in 1..10
  puts i
  end
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
end #<---------- Insert end here

if func1(3) == false  # Code runs but makes no sense. I'd put true here not false.
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" # Again, makes no sense but code runs. I'd put "max(100,1) failed"
  failrues = failures + 1
end


if failures # Again, code runs but is pointless. I'd have 'if failures > 0'
  puts "Test Failed"
else
  puts "Test Passed"
end
