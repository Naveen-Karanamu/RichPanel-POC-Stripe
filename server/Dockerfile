FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGODB_URL="mongodb+srv://naveen-kumar:richpanel@cluster0.3odyhmo.mongodb.net/"
ENV STRIPE_PUBLISHABLE_API_KEY="pk_test_51NbmN7SAMIDwhOYULVp4z83I7J3cxjACUP8lK6b9WU8GRgIwEKi8TwoY05xXqiQGN2Mmbh08QASsAuJiW3QyVmSN00c95MLiQE"
ENV STRIPE_SECRET_KEY="sk_test_51NbmN7SAMIDwhOYU34bgP8w9G4oXEkErEtgJ9MEljEhzwkp3Vsw4ccSAqjwvZC2Z5mEwHuhzCKyVhT8xyQwzbkaS00ZR1Cnf7t"
RUN npm run build


CMD ["yarn", "run", "start"]