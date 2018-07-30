require 'minitest/autorun'

class PriorityQueueTest < Minitest::Test
  def setup
    @priority_queue = PriorityQueue.new
  end

  def test_adds_element_in_correct_order
    @priority_queue << 2
    @priority_queue << 1
    @priority_queue << 3

    assert_equal [nil, 3, 1, 2], @priority_queue.elements
  end

  def test_removes_top_element
    @priority_queue << 2
    @priority_queue << 1
    @priority_queue << 3

    assert_equal 3, @priority_queue.pop
    assert_equal [nil, 2, 1], @priority_queue.elements
  end
end