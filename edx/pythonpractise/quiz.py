def averageFinder(new):
	length=len(new)
	total=sum(new)
	mean=length/total
	count=dict()
	for i in new:
		if i not in new:
			count[i]=1
		else:
			count[i]+=1

	print count
	array=[500, 450, 400, 400, 375, 350, 325, 300]

