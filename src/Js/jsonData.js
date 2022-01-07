let usersName = [];

export const setUsersCount = (data) => {
    data.map(item => {
        if (!usersName.includes(item.user)) {
            usersName.push(item.user);
        }
        if (item.replies) {
            setUsersCount(item.replies);
        }
        return;
    })
    return usersName;
}
