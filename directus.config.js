module.exports = (env) => {
	return {
		ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
		DB_CLIENT: DB_CLIENT,
		DB_HOST: env.DB_HOST,
		DB_PORT: env.DB_PORT,
		DB_DATABASE: env.DB_DATABASE,
		DB_USER: env.DB_USER,
		DB_PASSWORD: env.DB_PASSWORD,
		DB_SSL: env.DB_SSL,
		KEY: env.KEY,
		SECRET: env.SECRET,
		HOST: env.HOST,
		PORT: env.PORT,
		PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,
	};
};
