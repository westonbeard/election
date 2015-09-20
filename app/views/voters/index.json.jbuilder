json.array!(@voters) do |voter|
  json.extract! voter, :id, :first_name, :last_name, :address, :city, :state, :zip
  json.url voter_url(voter, format: :json)
end
