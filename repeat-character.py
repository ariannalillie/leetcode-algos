def repeatedCharacter(str):
    char_dict = {}
    for char in str:
        if char in char_dict.keys():
            return char
        else:
            char_dict[char] = 0



repeatedCharacter("abccbaacz")
