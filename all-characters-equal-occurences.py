def areOccurrencesEqual(str):
    hashmap = {}
    values = []

    for char in str:
        if char not in hashmap:
            hashmap[char] = 1
        else:
            hashmap[char] += 1
    for key in hashmap:
        values.append(hashmap[key])

    length = len(values)
    value = values[0]
    total = sum(values)
    return total/length == value


s = "abacbc"
print(areOccurrencesEqual(s))
