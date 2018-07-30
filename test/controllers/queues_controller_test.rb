require 'test_helper'

class QueuesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get queues_home_url
    assert_response :success
  end

end
