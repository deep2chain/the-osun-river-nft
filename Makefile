##localhost
run.localhost:
	@npx hardhat node

test.localhost:
	@npx hardhat test --network localhost

deploy.localhost:
	@npx hardhat run scripts/deploy.js --network localhost

all: deploy.localhost test.deployed.localhost