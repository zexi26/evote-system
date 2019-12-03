run: run-server run-client

run-server:
	$(MAKE) -C web-app/server run

run-client:
	$(MAKE) -C web-app/client run

status:
	docker container list

clean:
# Stop and remove all containers
	-@docker stop $$(docker ps -aq)
	-@docker rm $$(docker ps -aq)
