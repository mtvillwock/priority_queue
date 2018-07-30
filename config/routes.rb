Rails.application.routes.draw do
  root to: 'queues#home'

  namespace :api, defaults: { format: :json } do
    resources :queues #, only: [:show, :create, :index, :delete]
  end
end
