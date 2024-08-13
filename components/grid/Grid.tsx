import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

interface GridProps {
  items: Array<{ id: number; title: string; content: string }>;
  columns?: number;
}

const Grid = ({ items, columns = 2 }: GridProps) => {
  return (
    <View style={styles.gridContainer}>
      {items.map((item) => (
        <View key={item.id} style={[styles.gridItem, { flexBasis: `${100 / columns}%` }]}>
          <Card style={styles.card}>
            <Card.Title title={item.title} />
            <Card.Content>
              <Text>{item.content}</Text>
            </Card.Content>
          </Card>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    margin: 8,
  },
  card: {
    height: 120,
    justifyContent: 'center',
  },
});

export default Grid;
