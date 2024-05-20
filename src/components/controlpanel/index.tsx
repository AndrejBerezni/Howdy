import UserProfilePicture from '../UserProfilePicture'

export default function ControlPanel() {
  return (
    <section className="w-screen h-full sm:w-1/2 lg:w-1/3 sm:rounded-l-lg sm:border-2 dark:border-none bg-background dark:bg-backgroundDark">
      <UserProfilePicture status="online" />
    </section>
  )
}
