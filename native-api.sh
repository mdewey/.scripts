echo "staring native api..."
cd ~/va/vets-api 
bundle install 
foreman start -m all=1,clamd=0,freshclam=0