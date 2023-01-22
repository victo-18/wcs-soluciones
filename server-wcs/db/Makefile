DBNAME := db
database := wcs_soluciones
init:
	@make create
	
create:
	@docker run -d \
	--name ${DBNAME} \
	-e POSTGRES_PASSWORD=postgres \
	-e POSTGRES_DB=${database} \
	-v ${DBNAME}:/var/lib/postgresql/data \
	-p 5432:5432 \
	postgres
	clear
	@echo "Database ready..."

recreate:
	@make stop && make delete && make create
	clear
	
restart: 
	@docker container restart ${DBNAME}
	
start: 
	docker container start ${DBNAME}
	
attach:
	clear
	@gnome-terminal -- bash -c "docker container exec -it ${DBNAME} psql -U postgres -d ${database} && exit;exec bash;"

stop: 
	@docker container stop ${DBNAME}

delete:
	@docker container stop ${DBNAME} && docker container rm ${DBNAME} && docker volume rm ${DBNAME}
	clear