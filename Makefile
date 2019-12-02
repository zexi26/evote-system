run-server:
	$(MAKE) -C web-app/server run

status:
	docker container list
