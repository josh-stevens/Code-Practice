#include <stdio.h>
#include <iostream>
using namespace std;

void getPrimes(int limit) {

	if (limit <= 1) {

		cout << "No primes" << endl;

	}

	else {

		// 2 is the only even prime, and since we know the limit
		// is at least 2, we can go ahead and print it out, and
		// then we are just dealing with odd numbers

		cout << 2 << " ";

		// Starting with 3, count up and test each odd number (i) for 
		// being a prime until the program reaches a number greater
		// than the limit

		for (int i = 3; i <= limit; i += 2) {

			// Assume the number is a prime, then attempt to disprove it

			bool pFlag = true;

			// Since we are counting odd numbers only, nothing will be
			// divisible by 2, so starting checking for divisibility with
			// 3 and test every single number (j) until (i) is reached

			for (int j = 3; j < i; j++) {

				// If (i) is divisible by any number (j) with no remainder,
				// then (i) is not a prime

				if (i%j == 0) {

					pFlag = false;

				}

			}

			// If the loop doesn't disprove (i) as a prime, then it must
			// be a prime and should be printed to the screen.

			if (pFlag) {
				
				cout << i << " ";

			}
		}
	}
	
}

int main() {

	int x;

	cout << "Count primes up to what number? ";
	cin >> x;
	getPrimes(x);
	return 0;

}