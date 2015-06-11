#include <stdio.h>
#include <iostream.h>

int main() {
	void getPrimes(limit) {

		int divisors = 0;

		for (i = 2; i<limit; i++) {

			for (j = 2; j<i; j++) {

				if (i%j == 0) {

					divisors++;

				}
			}

			if (divisors == 1) {

				cout << i;

			}
		}
	}
}