page=1
pageStop=28
while [ $page -lt $pageStop ]
do 
#wget http://results.active.com/events/transamerica-chicago-triathlon/international/expanded?page=${page} -O page_${page}.html -nc &
wget http://results.active.com/events/transamerica-chicago-triathlon/international/expanded?page=${page} -O page_${page}.html 
let "page+=1"
done

cat *.html > AllResults.html
