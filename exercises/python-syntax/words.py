"""
[✓] For a list of words, print out each word on a separate line, but in all uppercase. How can you change a word to uppercase? Ask Python for help on what you can do with strings!

[✓] Turn that into a function, print_upper_words. Test it out. (Don’t forget to add a docstring to your function!)
"""


def print_upper_words(word_list):
    """ print out each word on a separate line all uppercase """
    for word in word_list:
        print(word.upper())


# print_upper_words(["mike", "rivera", "cool"])
# print(print_upper_words.__doc__)

"""
[✓] Change that function so that it only prints words that start with the letter ‘e’ (either upper or lowercase).
"""


# def print_e_words(word_list):
#     """ print out words that start with 'e', either lower or uppercase """
#     for word in word_list:
#         if word[0] == "e" or word[0] == "E":
#             print(word)


# print_e_words(["mike", "e-rivera", "e-cool", "EBYSEMAL"])

"""

[✓] Make your function more general: you should be able to pass in a set of letters, and it only prints words that start with one of those letters.

"""


def print_words_by_char(word_list, char1, char2):
    """ print out words that start with given letters, either lower or uppercase """
    for word in word_list:
        if word[0].lower() == char1.lower() or word[0].lower() == char2.lower():
            print(word.upper())


# print_e_words_by_char(["mike", "e-rivera", "Z-cool", "EBYSEMAL"], "Z", "e")
# print_words_by_char(["mike", "e-rivera", "Z-cool", "EBYSEMAL"], "m", "e")
print_words_by_char(["hello", "hey", "goodbye", "yo", "yes"], "h", "y")
