local_port=8081
container_port=8081
container_name=evote-server

build:
	@echo building $(container_name)
	docker build -t $(container_name) .

run: build
	docker run -p$(local_port):$(container_port) -d $(container_name)
	@echo Running $(container_name) with local port $(local_port) redirected to container port $(container_port)
