Rails.application.routes.draw do
  
  #Red_Flag_Records
  resources :red_flag_records, only:[:index, :show, :create, :update, :destroy]


  #Intervention_Records
  resources :intervention_records, only:[:index, :show, :create, :update, :destroy]

  #Users
  resources :users, only:[:index, :show, :create, :update, :destroy]


  #All records
  get "/all", to: "red_flag_records#all_records"

  # Sign-up
  post "/signup", to: "users#create"

  # Remain Logged in
  get "/me", to: "users#show"

  # # Change password
  # patch "/users/:id/change_password", to: "users#change_password"

  # Login/Logout Sessions
  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#destroy"


end
