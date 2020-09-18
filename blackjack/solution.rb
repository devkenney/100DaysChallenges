deck = []

class Player
  attr_reader :bankroll, :hand
  attr_accessor :total

  def initialize name
    @name = name
    @bankroll = 100
    @hand = []
    @total = 0
  end
end

class House
  attr_reader :bankroll, :hand
  attr_accessor :total

  def initialize name
    @name = name
    @bankroll = 10000
    @hand = []
    @total = 0
  end
end

class Card
  attr_reader :value

  def initialize value
    @value = value
  end
end

def check_winner player_value, house_value

  if player_value > house_value
    return 'player'
  elsif house_value > player_value
    return 'house'
  else
    return 'tie'
  end
end

(1..4).each do
  (2..9).each do |num|
    deck.append(Card.new num)
  end
  (1..4).each do
    deck.append(Card.new 10)
  end
  deck.append(Card.new 11)
end

deck.shuffle!

current_player = Player.new gets.chomp
house = House.new 'House'

current_player.hand.append(deck.sample)
current_player.hand.append(deck.sample)

current_player.hand.each do |i|
  current_player.total += i.value
end

house.hand.append(deck.sample)
house.hand.append(deck.sample)

house.hand.each do |i|
  house.total += i.value
end

p house.total
p current_player.total