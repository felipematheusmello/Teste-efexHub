import random
def verify_prime_number(number):
    division = number % 1
    if number >= 0 and division == 1 or division == 0:
        return True

    return False

print(verify_prime_number(2))

def verify_weighted_average(notes, weights):
    if len(notes) == len(weights):
        actual_number = 0
        for index in range(len(notes)):
            actual_number += notes[index] * weights[index]

        return actual_number

print(verify_weighted_average([8, 7, 6], [0.3, 0.4, 0.3]))



def generate_random_color_sequence():
    sequence = 'RGBY'
    new_sequence = ''
    for _ in range(len(sequence)):
        random_position = random.randrange(0, len(sequence))
        new_sequence += sequence[random_position]

    return new_sequence

def get_tips(sequence, response):
    tip = {
        'black': 0,
        'white': 0,
    }
    for counter in range(len(sequence)):
        if sequence[counter] == response[counter]:
            tip['black'] += 1
        else:
            tip['white'] += 1

    return f'DICAS {tip["black"]}B {tip["white"]}W'


def color_games():
    tries = 0
    random_sequence = generate_random_color_sequence()
    while tries < 10:
        tries+=1
        print('\n' +'\033[;1m Carácteres disponíveis RGBY')
        sequence = input('\033[0;0mEscreva a sequência com 4 letras: ').upper()[0:4]
        print(f'\033[0;93mSequência {sequence}' + f' \033[1;36mTentativa {tries}')
        print('\033[0;32m' + get_tips(sequence, random_sequence))
        if sequence == random_sequence:
            print(f'✨ \033[1;34m Parabéns! Você adivinhou a sequência correta: { random_sequence } ✨')
            return random_sequence

    print('\033[1;31m' + '😔 Não foi dessa vez, tente novamente! 😔')
    return sequence


color_games()