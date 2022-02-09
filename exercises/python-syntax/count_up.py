def count_up(start, stop):
    """Print all numbers from start up to and including stop.

         For example:

             count_up(5, 7)

        should print:

             5
             6
             7

    The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.

        range(start, stop, step)
    """
    while start <= stop:
        print(start)
        start += 1


count_up(5, 7)
count_up(8, 11)
