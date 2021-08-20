A =[]
    B =[]
     
    # Take only the characters which are
    # different in both the strings
    # for every pair of indices
    for i in range(n):
     
        # If the current characters differ
        if a[i]!= b[i]:
            A.append(a[i])
            B.append(b[i])
             
    # The strings were already equal
    if len(A)== len(B)== 0:
        return True
     
    # If the lengths of the
    # strings are two
    if len(A)== len(B)== 2:
     
        # If swapping these characters
        # can make the strings equal
        if A[0]== A[1] and B[0]== B[1]:
            return True
     
    return False