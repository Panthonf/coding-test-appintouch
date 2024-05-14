def inverted_triangle(rows):
    result = []
    for i in range(rows, 0, -1):
        line = " "
        for j in range(0, rows - i): # increasing space by 1
            line += "   "
        for k in range(0, 2 * i - 1): # decreasing * by 2
            line += " * "
        result.append(line)
    return result


def main():
    try:
        rows = int(input("Enter number of rows: "))
        if rows <= 0:
            print("Invalid input")
            return
        inverted_tri = inverted_triangle(rows)
        print(inverted_tri)
        for line in inverted_tri:
            print(line)
    except ValueError:
        print("Invalid input")


if __name__ == "__main__":
    main()
