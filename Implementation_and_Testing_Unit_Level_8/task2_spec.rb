require("minitest/autorun")
require_relative("failures_demo.rb")


class Task_2Test < MiniTest::Test

  def setup
  end

  def test_func1_gives_true_with_1
    answer = func1(1)
    assert_equal(true, answer) # test 1
  end

  def test_func1_gives_false_with_anything_else
    answer = func1(2)
    assert_equal(false, answer) # test 2
  end

  def test_max_returns_largest_number_when_first
    answer = max(2,1)
    assert_equal(2, answer) # test 3
  end

  def test_max_returns_largest_number_when_second
    answer = max(1,2)
    assert_equal(2, answer) # test 4
  end

end
