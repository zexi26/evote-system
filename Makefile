run:
	docker-compose up --build &

status:
	docker container list

clean:
# Stop and remove all containers
	-@docker-compose down
	-@docker stop $$(docker ps -aq)
	-@docker rm $$(docker ps -aq)