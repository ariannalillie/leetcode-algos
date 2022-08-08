def numJewelsInStones(jewels, stones):
    count = 0
    for stone in stones:
        if jewels.find(stone) == -1:
            continue
        else:
            count += 1
    return count

jewels = "aA"
stones = "aAAbbbb"

print(numJewelsInStones(jewels, stones))