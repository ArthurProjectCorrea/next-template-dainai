import * as Icons from 'lucide-react';

type IconComponent = typeof Icons.SquareTerminal;

export function getIcon(iconName: string): IconComponent {
  return ((Icons as Record<string, unknown>)[iconName] ||
    Icons.SquareTerminal) as IconComponent;
}
