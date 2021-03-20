all:

	make -j dev

dev: dev-backend dev-frontend
dev-backend:
	yarn backend develop
dev-frontend:
	yarn frontend dev