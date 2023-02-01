import prisma from '../../src/Database/prisma';

async function deleteAllData() {
	await prisma.$transaction([prisma.clients.deleteMany()]);
}

export const deleteFactory = {
	deleteAllData,
};
