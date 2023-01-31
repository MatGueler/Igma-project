import { wrongSchemaError } from '../Utils/ErrorUtils';

export class CPFValidator {
	numberCPF: string;

	veriffyCPFValidate() {
		if (
			!this.checkFirstValidateNumber() ||
			!this.checkSecondValidateNumber() ||
			!this.verifyDuplicateNumbers()
		) {
			throw wrongSchemaError('Invalid type of CPF');
		}
	}

	private checkFirstValidateNumber() {
		let firstSum = 0;
		const firstCheckerCPFNumber = Number(
			this.numberCPF[this.numberCPF.length - 2]
		);

		for (let i = this.numberCPF.length; i > 2; i--) {
			firstSum += Number(this.numberCPF[this.numberCPF.length - i]) * (i - 1);
		}

		let firstChecker = 11 - (firstSum % 11);

		if (firstChecker >= 10) {
			// Para valor maior ou igual que 10, o verificador deve ser zero
			if (firstCheckerCPFNumber !== 0) {
				return false;
			}
		} else {
			if (firstCheckerCPFNumber !== firstChecker) {
				return false;
			}
		}

		return true;
	}

	private checkSecondValidateNumber() {
		let secondSum = 0;
		const secondCheckerCPFNumber = Number(
			this.numberCPF[this.numberCPF.length - 1]
		);

		for (let i = this.numberCPF.length; i >= 2; i--) {
			secondSum += Number(this.numberCPF[this.numberCPF.length - i]) * i;
		}

		let secondChecker = 11 - (secondSum % 11);

		if (secondChecker >= 10) {
			if (secondCheckerCPFNumber !== 0) {
				return false;
			}
		} else {
			if (secondCheckerCPFNumber !== secondChecker) {
				return false;
			}
		}

		return true;
	}

	private verifyDuplicateNumbers() {
		let isEveryEquals: boolean = true;
		for (let i = this.numberCPF.length; i > 0; i--) {
			const currentNumber = this.numberCPF[i];
			if (currentNumber !== this.numberCPF[0]) isEveryEquals = false;
		}
		if (this.numberCPF.length !== 11 || isEveryEquals) {
			return false;
		}

		return true;
	}
}
