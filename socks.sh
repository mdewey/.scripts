echo "Enter your strong password for the socks thing..."
ssh-add ~/.ssh/id_rsa_vetsgov 
echo "Starting socks... no news is good news"
echo "try going to http://jenkins.vfs.va.gov/ to check is if is working"
ssh socks -D 2001 -N