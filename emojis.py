


def select_fittest(original_path, population_genome, selection_coefficient):
    fittest = []
    for i in range(len(population_genome)):
        fittest.append({
            "fitness": population_genome[i].calculate_fitness(original_path),
            "genotype": population_genome[i],
        })
    fittest.sort(key=operator.itemgetter("fitness"))
    fittest = fittest[0:int(len(population_genome) * selection_coefficient)]
    return fittest



