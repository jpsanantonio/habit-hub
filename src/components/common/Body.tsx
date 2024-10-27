import Welcome from "@/components/common/Welcome";
import DailyHabitTracker from "@/components/common/DailyHabitTracker";
import { Habit } from "@/types/habit";

export default function Body({
  isNewUser,
  isDarkMode,
  isEditMode,
  habits,
  setHabits,
  toggleShowAddHabitDialog,
  toggleShowEditHabitDialog,
  setEditingHabit,
}: {
  isNewUser: boolean;
  isDarkMode: boolean;
  isEditMode: boolean;
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
  toggleShowAddHabitDialog: () => void;
  toggleShowEditHabitDialog: () => void;
  setEditingHabit: (habit: Habit | null) => void;
}) {
  if (isNewUser) {
    return (
      <Welcome
        isDarkMode={isDarkMode}
        toggleShowAddHabitDialog={toggleShowAddHabitDialog}
      />
    );
  }

  return (
    <DailyHabitTracker
      isDarkMode={isDarkMode}
      isEditMode={isEditMode}
      habits={habits}
      setHabits={setHabits}
      toggleIsEditingHabit={toggleShowEditHabitDialog}
      setEditingHabit={setEditingHabit}
    />
  );
}
