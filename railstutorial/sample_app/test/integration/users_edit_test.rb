require 'test_helper'

class UsersEditTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:michael)
  end

  test "unsuccessful edit" do
    log_in_as(@user)
    get edit_user_path(@user)
    assert_template 'users/edit'

    patch user_path(@user), user: {
      name: "",
      email: "foo@invalid",
      password: "foo",
      password_confirmation: "bar"
    }
    assert_template 'users/edit'
  end

  test "should not allow the admin attribute to be edited via the web" do
    log_in_as(@user)
    assert @user.admin?

    patch user_path(@user), user: {
      name: "Foo Bar",
      email: @user.email,
      password: "",
      password_confirmation: "",
      admin: false
    }
    @user.reload
    assert_equal "Foo Bar", @user.name
    assert @user.admin?
  end

  test "successful_edit with friendly forwarding" do
    get edit_user_path(@user)
    log_in_as(@user)
    assert_redirected_to edit_user_path(@user)

    name = "Foo Bar"
    email = "foo@bar.com"
    patch user_path(@user), user: {
      name: name,
      email: email,
      password: "",
      password_confirmation: ""
    }
    assert_not flash.empty?
    assert_redirected_to @user

    @user.reload
    assert_equal name, @user.name
    assert_equal email, @user.email
  end
end
