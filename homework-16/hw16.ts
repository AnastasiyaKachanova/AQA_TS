import { customChecker} from "./custom.checker";

//positive tests7
customChecker(7, 0, 0, '*');
customChecker(1, 2, 3, '+');
customChecker(7, 2, 14, '*');
customChecker(9, 3, 3, '/');
customChecker(100, 70, 30, '-');
customChecker(44, 0, 44, '+');
customChecker(20, 5, 4, '/');
customChecker(7, 7, 49, '*');
customChecker(-5, -5, -10, '+');
customChecker(-5, 5, 0, '+');

//negative tests7
customChecker(2, 2, 5, '+');
customChecker(27, 25, 8, '-');
customChecker(2, 2, 17, '*');
customChecker(9, 5, 1, '-');
customChecker(25, 5, 7, '/');
customChecker(27, 25, 1, '+');
customChecker(2, 23, 50, '*');
customChecker(-7, -5, 12, '+');
customChecker(0, -5, -5, '-');
