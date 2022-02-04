import prisma from './clients'

export async function createContext(request) {
	return {
		...request,
		response: request.res,
		request: request.req,
		prisma
	};
}